# CaffeineOverflow
Βέκιος Παναγιώτης 03114094

Γρηγοράκος Ιωάννης 03113515

Δαβαράκης Θεόδωρος-Θηρίμαχος 03115002

Μελά Αναστασία 03114010

Νάκου Χριστίνα 03114735


Πληροφορίες για το πρόγραμμα:

Για το backend:

 Ο φάκελος με όλο τον κώδικα είναι ο φάκελος που βρίσκεται μέσα στο src φάκελο.
 
 Κάνουμε git clone.
 
 Εγκαθιστούμε το Node.js.
 
 Εγκαθιστούμε τη MongoDB.
 
 Έπειτα σε ένα terminal τρέχουμε την εντολή npm install (εφόσον έχουμε εγκαταστήσει επιτυχώς το Node.js).
 
 Αφού ολοκληρωθεί το npm install εκτελούμε την εντολή set caffeine_overflow_jwtPrivateKey=caffeine (export σε linux αντι για   set) για να ορίσουμε το κλειδί που θα χρησιμοποιήσουμε για την κρυπτογράφηση του token. 
 
 Για Linux έπειτα τρέχουμε την εντολή sudo mongod. Αν χρησιμοποιούμε windows δεν εκτελούμε αυτή την εντολή και προχωράμε κατευθείαν στην επόμενη.
 
 Εκτέλούμε την εντολή node index.js και πλέον το backend τρέχει και ακούει στην port 8765.  
 
 Για το frondend :
 
 o φάκελος είναι ο frontend.zip και οι εντολές για να τρέξει είναι:
 
 npm install
 
 Εγκαθιστούμε το με την εντολή npm install -g @angular/cli
 
 ng serve --ssl true --ssl-key "<..path_of_backend/backend/server.key>" --ssl-cert "<..path_of_backend/backend/server.cert>"
 
 όπου path_of_backend: θα προσθέσετε το path που βρίσκεται ο φάκελος backend, μέσα στο backend φάκελο έχει αυτά τα αρχεία:
 server.key, server.cert

και ανοίγετε στο browser τη σελίδα: https://localhost:4200/
