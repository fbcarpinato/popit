# PopIt

PopIt allows people to participate in challenges by uploading image contents
where the most-liked content wins.

## Functional Requirements

1. the admin panel: CRUD operations on users, challenges, and contents (as a separate endpoint).
2. The user feed, showing the contents uploaded: the user can like contents (no smart prioritization algorithm required, simply populate the feed with the last contents uploaded).
3. The challenges view: this is where users can upload their images, a user can upload a content for a challenge and see the statistics about the challenge itself (e.g., the users’ rankings in that challenge; content upload is a bonus, random images using external services can be used).

## How to run

1. Setup the database via local postgres setup or via Docker Compose using `docker-compose up -d`
2. Copy the content of `.env.example` into `.env` and edit the `DATABASE_URL` if needed (it should be already working if you used Docker Compose)
3. Run the prisma migrations using `npx prisma migrate dev --schema=apps/api/prisma/schema.prisma`
