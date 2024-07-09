import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/PrimaryButton";

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-screen px-2 md:px-0 bg-primary/10">
      <div className="bg-white p-10 shadow-md text-center border-border">
        <h1 className="text-6xl font-bold drop-shadow-lg mb-4">404</h1>
        <p className="text-xl font-semibold mb-6">Page not found</p>
        <p className="text-sm mb-8">
          The link you clicked may be broken or the page <br /> may have been
          removed or renamed.
        </p>
        <PrimaryButton
          label="Go Back"
          width="w-1/3"
          className="mx-auto"
          onClick={() => navigate(-1)}
        >
          Go back
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Error404;
