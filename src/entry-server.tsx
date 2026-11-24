import App from "@/App";
import { renderToStaticMarkup } from "react-dom/server";

export function render() {
  return renderToStaticMarkup(<App />);
}
