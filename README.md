# Initiation Micro-service avec Redis
Les programmes sont écrits en Javascript avec la bibliothèque [Redis](https://github.com/redis/node-redis, "node-redis") et Docker.
Chaque dossier représente un exemple d'architecture micro service
- [Exemple de broadCast sur une chat room](https://github.com/wezerg/init-microservice-redis/tree/main/basicBroadcastExample "basicBroadCastExample")
- [Exemple de file d'attente dans un cycle de production](https://github.com/wezerg/init-microservice-redis/tree/main/basicWorkQueueExample "basicWorkQueueExample")
- [Exemple de parser de texte dans une chat room](https://github.com/wezerg/init-microservice-redis/tree/main/basicChannelParserExample "basicChannelParserExample")
- [Exemple de Fizz buzz distribué sur plusieurs conteneurs](https://github.com/wezerg/init-microservice-redis/tree/main/basicFizzBuzzExample "basicFizzBuzzExample")

## Lancement d'un micro-service

- Se placer dans le dossier du micro-service voulu
- Exécuter la commande ```docker compose up``` pour lancer les conteneurs nécessaires à l'application.

## Arrêt d'un micro-service

- Exécuter CTRL+V pour arréter les conteneurs.
- Exécuter ```docker compose down``` pour supprimer les conteneurs lancés précédemment.
