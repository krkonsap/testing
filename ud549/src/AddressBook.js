function AddressBook() {
    this.contacts = [];
}

AddressBook.prototype.addContact = function (contact) {
    this.contacts.push(contact);
}

AddressBook.prototype.addContact = function (index) {
    return this.contacts[index];
}