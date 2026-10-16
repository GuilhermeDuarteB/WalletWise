import * as WebBrowser from "expo-web-browser";
import { supabase } from "./supabase";

const redirectTo = "wisewallet://auth/callback";

export async function signInWithFacebook() {
  //pede url a supabase para login

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "facebook",
    options: {
      redirectTo,
      skipBrowserRedirect: true, //impede abrir o browser
    },
  });

  if (error) {
    console.log("Facebook erro login", error.message);
    throw error; //interrompe o cod e dispara erro
  }

  if (!data.url) {
    //valida se o url e success ou fail
    throw new Error("nao obteu url facebook");
  }

  const result = await WebBrowser.openAuthSessionAsync(data.url, redirectTo);

  if (result.type !== "success") {
    console.log("Login facebook cancelado:", result.type);
    return;
  }

  const callbackUrl = new URL(result.url);

  const hashParams = new URLSearchParams(callbackUrl.hash.replace(/^#/, ""));

  //logs
  const authError =
    hashParams.get("error_description") ??
    callbackUrl.searchParams.get("error_description") ??
    hashParams.get("error") ??
    callbackUrl.searchParams.get("error");

  if (authError) {
    console.log("facebook erro na autenticação:", authError);
    throw new Error(authError);
  }

  const accessToken = hashParams.get("access_token");
  const refreshToken = hashParams.get("refresh_token");

  // confirma se tokens foram recebidos
  console.log("facebook auth - tokens encontrados:", {
    accessToken: Boolean(accessToken),
    refreshToken: Boolean(refreshToken),
  });

  if (!accessToken || !refreshToken) {
    throw new Error(
      "Não foram recebidos os tokens necessários para iniciar sessão.",
    );
  }

  // guarda sessao no supabase
  const { error: sessionError } = await supabase.auth.setSession({
    access_token: accessToken,
    refresh_token: refreshToken,
  });

  if (sessionError) {
    console.log("facebook erro ao guardar sessão:", sessionError.message);
    throw sessionError;
  }
}
