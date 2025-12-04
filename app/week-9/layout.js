import { AuthContextProvider } from "../contexts/AuthContexts.js";
 
export default function Layout({ children }) {
  return <AuthContextProvider>{children}</AuthContextProvider>;

}
