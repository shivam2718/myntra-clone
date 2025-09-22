const LoadingSpinner = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center position-fixed top-0 start-0 w-100 h-100"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        zIndex: 9999,
        backdropFilter: "blur(4px)"
      }}
    >
      <div className="text-center p-4 rounded-4 shadow-lg bg-white" style={{ minWidth: "220px" }}>
        <div
          className="spinner-border text-primary mb-3"
          role="status"
          style={{ width: "3rem", height: "3rem", borderWidth: "0.35rem" }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="fs-5 fw-medium text-secondary">Loading, please wait...</div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
