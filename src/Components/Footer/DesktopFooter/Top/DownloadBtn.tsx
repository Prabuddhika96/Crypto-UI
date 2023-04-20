function DownloadBtn({ logo, smallText, bigText }: any) {
  return (
    <button className="px-5 py-1 bg-[#13203d] rounded-lg hover:bg-[#0e1e47] flex gap-x-2 items-center max-md:rounded-sm max-md:w-11/12 max-md:mx-auto max-md:my-2 max-md:justify-center">
      <div className="flex justify-center text-3xl">{logo}</div>
      <div className="col-span-3 text-left">
        <p className="text-xs">{smallText}</p>
        <p className="text-lg">{bigText}</p>
      </div>
    </button>
  );
}

export default DownloadBtn;
