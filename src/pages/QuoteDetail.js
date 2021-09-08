import { useParams } from "react-router-dom";

const QuoteDetail = () => {
  const params = useParams();
  return (
    <div>
      <h1>QuoteDetail</h1>
      <p>{params.quoteId}</p>
    </div>
  );
};

export default QuoteDetail;
