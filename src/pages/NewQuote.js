import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import { useEffect } from "react/cjs/react.development";
const NewQuote = () => {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const onAddQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };
  return (
    <QuoteForm
      onLoading={status === "pending"}
      onAddQuote={onAddQuoteHandler}
    />
  );
};

export default NewQuote;
