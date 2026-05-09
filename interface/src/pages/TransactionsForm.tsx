import {
  useEffect,
  useId,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import type {
  CreateTransactionDTO,
  TransactionType,
} from "../types/transactions";
import { getCategories } from "../services/categoryService";
import type { Category } from "../types/category";
import Card from "../components/Card";
import TransactionTypeSelector from "../components/TransactionTypeSelector";
import Input from "../components/Input";
import { AlertCircle, Calendar, DollarSign, Save, Tag } from "lucide-react";
import Select from "../components/Select";
import Button from "../components/Button";
import { useNavigate } from "react-router";
import { createTransaction } from "../services/transactionService";
import { toast } from "react-toastify";

interface FormData {
  description: string;
  amount: number | "";
  date: string;
  categoryId: string;
  type: TransactionType;
}

const initialFormData: FormData = {
  description: "",
  amount: "",
  date: "",
  categoryId: "",
  type: "expense",
};

const TransactionsForm = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [invalidFields, setInvalidFields] = useState<string[]>([]);
  const formId = useId();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async (): Promise<void> => {
      const response = await getCategories();
      setCategories(response);
    };

    fetchCategories();
  }, []);

  const filteredCategories = categories.filter(
    (category) => category.type === formData.type,
  );

  const validateForm = (): boolean => {
    const newInvalidFields: string[] = [];

    if (!formData.description) newInvalidFields.push("description");
    if (!formData.amount || Number(formData.amount) <= 0)
      newInvalidFields.push("amount");
    if (!formData.date) newInvalidFields.push("date");
    if (!formData.categoryId) newInvalidFields.push("categoryId");

    setInvalidFields(newInvalidFields);

    if (newInvalidFields.length > 0) {
      if (
        newInvalidFields.includes("amount") &&
        Number(formData.amount) <= 0 &&
        formData.description &&
        formData.date &&
        formData.categoryId
      ) {
        setError("O valor deve ser maior que 0");
      } else {
        setError("Preencha todos os campos destacados");
      }
      return false;
    }

    setError(null);
    return true;
  };

  const handleTransactionType = (itemType: TransactionType): void => {
    setFormData((prev) => ({ ...prev, type: itemType }));
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ): void => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (invalidFields.includes(name)) {
      setInvalidFields((prev) => prev.filter((field) => field !== name));
    }
  };

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (!validateForm()) {
        return;
      }

      const transactionData: CreateTransactionDTO = {
        description: formData.description,
        amount: Number(formData.amount),
        categoryId: formData.categoryId,
        type: formData.type,
        date: new Date(`${formData.date}T00:00:00`).toISOString(),
      };

      await createTransaction(transactionData);
      toast.success("Transação adicionada com sucesso!");
      navigate("/transacoes");
    } catch (err) {
      console.error(err);
      toast.error("Falha ao adicionar Transação!");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate("/transacoes");
  };

  const hasError = (fieldName: string) => invalidFields.includes(fieldName);

  return (
    <div className="container-app py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Nova Transação</h1>

        <Card>
          {error && (
            <div className="flex items-center bg-red-300 border border-red-700 rounded-xl p-4 mb-6 gap-2">
              <AlertCircle className="w-5 h-5 text-red-700" />
              <p className="text-red-700">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex gap-2 flex-col">
              <label htmlFor={formId}>Tipo de Transação</label>
              <TransactionTypeSelector
                id={formId}
                value={formData.type}
                onChange={handleTransactionType}
              />
            </div>

            <Input
              label="Descrição"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Ex: Supermercado, Salário, etc..."
              hasError={hasError("description")}
            />

            <Input
              label="Valor"
              name="amount"
              type="number"
              step="0.01"
              value={formData.amount}
              onChange={handleChange}
              placeholder="R$ 0,00"
              icon={<DollarSign className="w-4 h-4" />}
              hasError={hasError("amount")}
            />

            <Input
              label="Data"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              icon={<Calendar className="w-4 h-4" />}
              hasError={hasError("amount")}
            />

            <Select
              label="Categoria"
              name="categoryId"
              value={formData.categoryId}
              onChange={handleChange}
              icon={<Tag className="w-4 h-4" />}
              hasError={hasError("categoryId")}
              options={[
                { value: "", label: "Selecione uma Categoria" },
                ...filteredCategories.map((category) => ({
                  value: category.id,
                  label: category.name,
                })),
              ]}
            />

            <div className="flex justify-end space-x-3 mt-2">
              <Button
                variant="outline"
                onClick={handleCancel}
                type="button"
                disabled={loading}
              >
                Cancelar
              </Button>
              <Button
                disabled={loading}
                type="submit"
                variant={formData.type === "expense" ? "danger" : "success"}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-4 h-4 border-4 border-gray-700 border-t-transparent rounded-full animate-spin" />
                  </div>
                ) : (
                  <Save className="w-4 h-4 mr-2" />
                )}
                Salvar
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default TransactionsForm;
