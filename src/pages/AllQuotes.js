import QuoteList from "../components/quotes/QuoteList";
const DUMMY_DATA = [
  { id: "q1", author: "qqq", text: "qeqeqeqeqeqeqeq eqeq" },
  { id: "q2", author: "qrqrq", text: "qerqqrqrqrqrqeqeqeq qrq" },
];

const AllQuotes = () => {
  return (
    <div>
      <QuoteList quotes={DUMMY_DATA} />
    </div>
  );
};

export default AllQuotes;
