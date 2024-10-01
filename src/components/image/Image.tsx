import { useState } from "react";
import { VscLoading } from "react-icons/vsc";

const Image = ({
  src,
  alt,
  className,
  loaderClassName,
}: {
  src: string;
  alt?: string;
  className?: string;
  loaderClassName?: string;
}) => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading && (
        <div
          className={`flex-1 min-h-48 bg-white text-primary-base font-[700] shadow-inner border flex items-center justify-center text-center rounded-xl ${loaderClassName}`}
        >
          <VscLoading size={50} className="animate-spin w-60" />
        </div>
      )}

      <img
        onLoad={() => setLoading(false)}
        src={src}
        alt={alt}
        className={`${!loading ? "block" : "hidden"} ${className}`}
      />
    </>
  );
};

export default Image;
