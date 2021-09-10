import { Route, Switch, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_DATA = [
  { id: "q1", author: "qqq", text: "qeqeqeqeqeqeqeq eqeq" },
  { id: "q2", author: "qrqrq", text: "qerqqrqrqrqrqeqeqeq qrq" },
];

const QuoteDetail = () => {
  const params = useParams();
  const quote = DUMMY_DATA.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <p>No quote found!</p>;
  }
  return (
    <div>
      <HighlightedQuote quote={quote} />
      <Switch>
        <Route path="/quotes/:quoteId/comments">
          <Comments />
        </Route>
      </Switch>
    </div>
  );
};

export default QuoteDetail;
