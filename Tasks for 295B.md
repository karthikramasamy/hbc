**9/9/2019**

Blockchain TO-DOs

\* Deploy a HL blockchain

\* Deploy a smart contract

Smart Contract TO-DOs

\* Research on how to acheive RBAC

\* Design a smart contract for a health record

Smart Contract TO-DO’s part 2

\* Show that a (health) record can be created on the blockchain

\* Show that a created health record can be retrieved from the blockchain

User Roles and RBAC

\* Research on how user, roles work in HL

\* Show that a user with one assigned role can see full health record

\* Show that a user with another assigned role can see a de-identified health record.

HL Composer Setup

nvm use 8.16.1

node -v // should be 8.x

Python -v // should be 2.7

composer -v // snould be 0.20.1\. (or 0.20.9)

composer-rest-server -v // should be 0.20.1

yo —generators // should see hyperledger-composer

Fabric-CA Container

fabric-ca-server —help

 Commands:

 init Initialize the fabric-ca server

 start Start the fabric-ca server

 version Prints Fabric CA Server version

fabric-ca-client —help

 Commands: 

 affiliation Manage affiliations

 certificate Manage certificates

 enroll Enroll an identity

 gencrl Generate a CRL

 gencsr Generate a CSR

 getcainfo Get CA certificate chain and Idemix public key

 identity Manage identities

 reenroll Reenroll an identity

 register Register an identity

 revoke Revoke an identity

 version Prints Fabric CA Client version

Business Network Cards

composer card —help

 Commands:

 list

 create

 delete

Composer Network

composer network —help

Starting After all tools, etc are installed.

cd fabric-tools

./downloadFabric.sh

./startFabric.sh

./createPeerAdminCard.sh

Deploying an application - 4 steps

1) Get Peer Admin card info:

 composer card list

2) Install it to the network:

 composer network install -a /path/to/my.bna -c PeerAdmin@hlfv1

3) Start the application: A new network admin card will be added to the card list

 composer network start -c PeerAdmin@hlfv1 -n hbc -V 0.0.2 -A admin -S adminpw

4) Import the network admin card to composer

 composer card import -f ./admin\\@hbc.card

composer card list to verify it was added.

Composer CLI util commands:

Ping a network:

composer network ping -c admin@test-bna

composer network list -c admin@test-bna

Upgrading a Smart Contract (Business Network Application)

1) create an archive for the new version of BNA

2) Install the new version of archive using:

 composer network install -a /path/to/my.bna -c PeerAdmin@hlfv1

3) Upgrade

composer network upgrade -c PeerAdmin@hlfv1 -n hbc -V 0.0.4

Composer REST server

composer-rest-server -c -p

composer participant add -d '{ 

 "$class": "org.hbc.participant.KaiserPhysician",

 "department": "radiology",

 "participantKey": "9346",

 "contact": {

 "$class": "org.hbc.participant.Contact",

 "fName": "Veniam.",

 "lname": "Id.",

 "email": "Quis."

 }

}' -c admin@hbc

composer participant add -d '{

 "$class": "org.hbc.participant.KaiserResearchApp", "participantKey": "8975", "contact": { "$class": "org.hbc.participant.Contact", "fName": "Excepteur dolore cillum amet magna.", "lname": "Consectetur adipisicing veniam nulla ea.", "email": "Cillum dolore ea." } 

}' -c admin@hbc

composer identity issue -u 8975 -a org.hbc.participant.KaiserResearchApp\#8975 -c admin@hbc

composer card import -f 8975@hbc.card

composer identity issue -u 9346 -a org.hbc.participant.KaiserPhysician\#9346 -c admin@hbc

composer card import -f 9346@hbc.card

composer card list