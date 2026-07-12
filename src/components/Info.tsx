type InfoProps = {
  label: string;
  value?: string | number;
};

function Info({ label, value }: InfoProps) {
  return (
    <div className="col-6 col-md-3">
      <div className="text-muted small">{label}</div>
      <div className="fw-semibold">{value}</div>
    </div>
  );
}

export default Info;
