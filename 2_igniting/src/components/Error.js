import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  return (
    <>
      <h3>
        {error.status} || <span>{error.statusText}</span>
      </h3>
    </>
  );
}
