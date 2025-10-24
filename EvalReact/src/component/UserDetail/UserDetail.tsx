import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUserById } from "../../data/dataApi";
import type { User } from "../../model/User";

function UserDetail(){

    const {id} = useParams();
    const [user, setUser] = useState<User|null>(null);

    if(id) {
        useEffect(() => {
            fetchUserById(parseInt(id)).then(data => {
            setUser(data);
            });
        }, []);
    }
    if(user){
        return(
            <div>
               <div className="user-card">
      <img
        src={user.image}
        alt={`${user.firstName} ${user.lastName}`}
        className="user-image"
      />

      <div className="user-content">
        <h3 className="user-name">{user.firstName} {user.lastName}</h3>
        <p className="user-email">Email: {user.email}</p>
        <p className="user-username">Username: {user.username}</p>
        <p className="user-phone">Phone: {user.phone}</p>
        <p className="user-address">
          Address: {user.address.address}, {user.address.city}, {user.address.state}, {user.address.postalCode}
        </p>
      </div>
    </div>
            </div>
        )
    }
}

export default UserDetail;