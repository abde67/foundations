import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }
  function handleSelectFriend(friend) {
    // setSelectedFriend(friend);
    //
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }
  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelect={handleSelectFriend}
        />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "close" : "Add friend"}
        </Button>
      </div>
      {selectedFriend && (
        <SplitBillForm
          selectedFriend={selectedFriend}
          onSplitbill={handleSplitBill}
        />
      )}
    </div>
  );
}

function FriendList({ friends, onSelect, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          selectedFriend={selectedFriend}
          key={friend.id}
          onSelect={onSelect}
        />
      ))}
    </ul>
  );
}

function Friend({ friend, onSelect, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}s</h3>
      {friend.balance < 0 && (
        <p className="red">
          you owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance === 0 && <p>you and {friend.name} are even</p>}
      <Button onClick={() => onSelect(friend)}>
        {isSelected ? "close" : "select"}
      </Button>
    </li>
  );
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSbmit(e) {
    e.preventDefault();
    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    onAddFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSbmit}>
      <label>👩🏼‍🤝‍👩🏼 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>🖼️ Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add friend</Button>
    </form>
  );
}

function SplitBillForm({ selectedFriend, onSplitbill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handeSubmit(e) {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    onSplitbill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }
  return (
    <form className="form-split-bill" onSubmit={handeSubmit}>
      <h2>🪓Split a bill with {selectedFriend.name}</h2>
      <label>💸Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>🙋‍♂️Your expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />
      <label>🍟{selectedFriend.name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />
      <label> 😱who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">you</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>split bill </Button>
    </form>
  );
}
