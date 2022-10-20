function makeFriendsList(friends) {
  
  let list = document.createElement('UL');
  list.innerHTML = friends.map(friend => `<li> ${friend.firstName} ${friend.lastName} </li>`)
  .join('');

  return list;
}
