import { CircleLoaderProps } from './types.d';

const CircleLoader = (props: CircleLoaderProps) => {
  const { color } = props;
  return (
    <div
      className="mr-2 inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-r-transparent text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status"
      style={{ marginTop: '-3px', color: color ? color : '' }}
    />
  );
};

export default CircleLoader;
