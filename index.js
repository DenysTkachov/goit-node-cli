const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require("./contacts");

const { program } = require("commander");
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      console.log("List of contacts:", await listContacts());
      break;

    case "get":
      console.log("Contact by ID:", await getContactById(id));
      break;

    case "add":
      console.log("Added contact:", await addContact(name, email, phone));
      break;

    case "remove":
      console.log("Removed contact:", await removeContact(id));
      break;

    default:
      console.log("Options:", options);
      console.warn("\x1B[31m Unknown action type!");
  }
}

(async () => {
  await invokeAction(options);
})();
