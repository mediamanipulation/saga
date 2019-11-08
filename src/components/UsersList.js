import React from 'react';
import {ListGroup, ListGroupItem, Button} from 'reactstrap';
import { SSL_OP_NO_TLSv1_1 } from 'constants';

const UsersList = ({users}) =>{
    return(
        <ListGroup>
            {users.sort((a,b)=>{
                if(a.firstName > b.firstName){
                    return 1;
                }else if(a.firstName < b.firstName){
                    return -1;
                }else if(a.lastName > b.lastName){
                    return 1;
                }else if(a.lastName < b.lastName){
                    return -1;
                }else{
                    return 0;
                }
            }).map((user) => {
                return (
                    <ListGroupItem key={user.id}>
                    <section style={{display: 'flex'}}>
                        <div  style={{flexGrow: 1}}>
                            {user.firstName} {user.lastName}
                        </div>
                        <Button outline color='danger' >

                        </Button>
                    </section>
                    </ListGroupItem>
                ); 
            })}
        </ListGroup>
    ) 
};
export default UsersList