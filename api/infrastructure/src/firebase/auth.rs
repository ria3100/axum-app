use anyhow::{Error, Result};
use jwks_client::keyset::KeyStore;
use serde_derive::Deserialize;

#[derive(Deserialize)]
struct Claims {
  pub sub: String,
}

// pub fn get_token(req: &HttpRequest) -> Result<String, Error> {
//   let token: String = req
//     .headers()
//     .get("Authorization")
//     .unwrap()
//     .to_str()
//     .unwrap()
//     .to_string();
//   Ok(token)
// }

pub async fn verify(token: String) -> Result<String, Error> {
  let jkws_url =
    "https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com";

  let trim_token = token.trim_start_matches("Bearer ");

  let key_set = KeyStore::new_from(jkws_url).await.unwrap();
  key_set.verify(trim_token).unwrap();

  let key_store = KeyStore::new();
  let jwt = key_store.decode(trim_token).unwrap();

  jwt.expired().unwrap();

  let claims = jwt.payload().into::<Claims>().unwrap();

  Ok(claims.sub)
}
