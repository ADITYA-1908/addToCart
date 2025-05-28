import "./Loading.css";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-40">
      <div className="flex h-28 w-28 flex-col items-center justify-center bg-blue-50 p-4 rounded-2xl shadow-xl border border-blue-200">
        <div className="loader ease-linear rounded-full border-8 border-t-blue-600 border-blue-200 h-12 w-12 mb-2"></div>
        <p className="text-blue-600 mt-1 text-sm font-semibold tracking-wide">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loading;
