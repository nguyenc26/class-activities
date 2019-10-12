var orm = require("./orm");

// Find all the pets ordering by the lowest price to the highest price.
orm.selectWhere("party_name","parties");

//Console log all the client names.
orm.selectWhere("client_name","clients");

//Console log all the parties that have a party-type of grown-up.
//orm.selectAndOrder("party_type", "parties", "grown-up");

//Console log all the clients and their parties.
orm.leftJoin(["client_name", "party_name"], "clients", "parties", "id", "client_id");
