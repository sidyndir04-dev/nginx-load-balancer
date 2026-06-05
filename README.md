# Challenge n°5 — Configuration Nginx pour répartir la charge

## Description
Configuration Nginx en mode reverse proxy / load balancer avec règles de sécurité avancées.

## Fonctionnalités
- Reverse proxy / Load balancer (round-robin) vers 2 backends Node.js
- - Blocage des méthodes HTTP (seuls GET et POST autorisés → 403)
  - - Rate limiting : max 10 req/min par IP → 429
    - - Blocage des patterns suspects dans l'URL (XSS, SQLi)
      - - Headers HTTP de sécurité (X-Frame-Options, X-XSS-Protection, CSP, etc.)
       
        - ## Structure
        - ```
          nginx-load-balancer/
          ├── nginx/
          │   └── nginx.conf
          ├── backend/
          │   ├── app1/index.js
          │   └── app2/index.js
          ├── docker-compose.yml
          ├── Dockerfile.nginx
          └── .github/workflows/ci.yml
          ```

          ## Déploiement
          ```bash
          docker-compose up -d
          ```
