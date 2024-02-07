import React, { useState } from "react";


//options only exist within the context of a select

 const [selectedUserId, setSelectedUserId] = useState<number>(0);
 const [users, setUsers] = useState<User[]>([]);

// ....

<select value={selectedUserId} onChange={e => setSelectedUserId(parseInt(e.target.value))}>
  <option value={0}>Please choose a user</option>
  {users.map(user => (
    <option value={user.id} key={`user-option-${user.id}`}>{user.username}</option>
  )}
</select>
