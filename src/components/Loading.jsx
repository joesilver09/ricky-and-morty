const Loading = () => {
  return (
<div className="bg-gradient-to-b from-slate-900 via-black to-green-950 fixed inset-0 flex justify-center items-center z-10">
  <div className="flex flex-col justify-center p-12 mb-4 max-w-[316px] max-h-[400px]">
    <div>
      <img src="loader.gif" alt="loading" />
    </div>
    <div className="flex justify-center text-5xl font-bold text-white p-5 min-h-max w-full overflow-hidden">
      Loading . . .
    </div>
  </div>
</div>

  );
};
export default Loading;
