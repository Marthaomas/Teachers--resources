interface StatCardProps {
    title: string;
    value: string | number;
    color: string;
    subtitle: string;
  }
  
  const StatCard = ({ title, value, color, subtitle }: StatCardProps) => {
    return (
      <div className={`p-6 rounded-lg text-blue ${color} flex flex-col items-center justify-center`}>
        <h3 className="text-3xl font-bold">{value}</h3>
        <p className="text-sm">{title}</p>
        <span className="text-xs mt-2 text-gray-200">{subtitle}</span>
      </div>
    );
  };
  
  export default StatCard;
  