import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchUserById } from "../../data/dataApi";
import type { User } from "../../model/User";
import "./UserDetail.css";

function UserDetail(){

    const {id} = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState<User|null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if(id) {
            setLoading(true);
            fetchUserById(parseInt(id))
                .then(data => {
                    setUser(data);
                    setLoading(false);
                })
                .catch(err => {
                    setError('Impossible de charger les détails de l\'utilisateur');
                    setLoading(false);
                    console.error(err);
                });
        }
    }, [id]);

    if(loading){
        return <div className="loading">Chargement des détails...</div>;
    }

    if(error){
        return (
            <div className="user-detail-container">
                <div className="error">
                    <span className="error-icon">⚠️</span>
                    <p>{error}</p>
                    <button onClick={() => navigate('/')}>
                        Retour à la liste
                    </button>
                </div>
            </div>
        );
    }

    if(!user){
        return (
            <div className="user-detail-container">
                <div className="error">
                    <span className="error-icon">❓</span>
                    <p>Utilisateur non trouvé</p>
                    <button onClick={() => navigate('/')}>
                        Retour à la liste
                    </button>
                </div>
            </div>
        );
    }

    return(
        <div className="user-detail-container">
           <div className="id-card">
              <div className="id-card-header">
                <h2>Information</h2>
                <div className="id-card-photo-container">
                  <img
                    src={user.image}
                    alt={`${user.firstName} ${user.lastName}`}
                    className="id-card-photo"
                  />
                </div>
              </div>

              <div className="id-card-body">
                <h3 className="id-card-name">{user.firstName} {user.lastName}</h3>

                <div className="id-card-info">
                  <div className="id-card-field">
                    <span className="id-card-label">Username:</span>
                    <span className="id-card-value">{user.username}</span>
                  </div>

                  <div className="id-card-field">
                    <span className="id-card-label">Email:</span>
                    <span className="id-card-value">{user.email}</span>
                  </div>

                  <div className="id-card-field">
                    <span className="id-card-label">Téléphone:</span>
                    <span className="id-card-value">{user.phone}</span>
                  </div>

                  <div className="id-card-field">
                    <span className="id-card-label">Âge:</span>
                    <span className="id-card-value">{user.age} ans</span>
                  </div>

                  <div className="id-card-field">
                    <span className="id-card-label">Genre:</span>
                    <span className="id-card-value">{user.gender}</span>
                  </div>

                  <div className="id-card-field">
                    <span className="id-card-label">Né(e) le:</span>
                    <span className="id-card-value">{new Date(user.birthDate).toLocaleDateString('fr-FR')}</span>
                  </div>

                  <div className="id-card-field">
                    <span className="id-card-label">Adresse:</span>
                    <span className="id-card-value">
                      {user.address.address}, {user.address.city}, {user.address.state} {user.address.postalCode}, {user.address.country}
                    </span>
                  </div>
                </div>
              </div>

              <div className="id-card-footer">
                <button className="back-button" onClick={() => navigate('/')}>
                  ← Retour à la liste
                </button>
              </div>
            </div>
        </div>
    );
}

export default UserDetail;