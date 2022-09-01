import "./fullLoader.css";

function FullLoader({ displayLoader = false }) {
  return (
    <>
      {displayLoader ? (
        <div className="p-abs z-foreground loader-container h-screen w-screen fx fx-jc-center fx-ai-center">
          <span className=" loader "></span>
        </div>
      ) : null}
    </>
  );
}

export { FullLoader };
