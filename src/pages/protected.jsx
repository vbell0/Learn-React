import { useAuth } from "../auth/auth_provaider"


export default function ProtectedPage() {
  let auth = useAuth()
  return (
    <div>
      <h3>Protected</h3>
      <p>Hi <strong>{auth.user}!{" "}</strong></p>
    </div>
  )
}
