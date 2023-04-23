# PopIt

PopIt allows people to participate in challenges by uploading image contents
where the most-liked content wins.

## Functional Requirements

1. the admin panel: CRUD operations on users, challenges, and contents (as a separate endpoint).
2. The user feed, showing the contents uploaded: the user can like contents (no smart prioritization algorithm required, simply populate the feed with the last contents uploaded).
3. The challenges view: this is where users can upload their images, a user can upload a content for a challenge and see the statistics about the challenge itself (e.g., the users’ rankings in that challenge; content upload is a bonus, random images using external services can be used).
