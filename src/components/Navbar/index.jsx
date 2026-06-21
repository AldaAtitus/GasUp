import "./navbar.css";
import { useAuth } from "../../contexts/useAuth";

export function Navbar() {
    const { user, logout } = useAuth();

    const photoUrl = user?.photo
        ? (user.photo.startsWith("http")
            ? user.photo
            : `https://api-gasup.onrender.com${user.photo}`)
        : "/user.png";

    return (
        <header className="navbar">
            <div className="navbar-brand">GasUp</div>

            <div className="navbar-user">
                <img
                    src={photoUrl}
                    alt="Foto de perfil"
                    className="navbar-user-photo"
                    onError={(e) => {
                        e.target.src = "/user.png";
                    }}
                />

                <span className="navbar-user-name">
                    Olá, {user?.name || "Usuário"}
                </span>

                <button
                    className="navbar-logout"
                    onClick={logout}
                    title="Sair"
                >
                    ✕
                </button>
            </div>
        </header>
    );
}