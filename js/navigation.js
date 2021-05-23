const navKeys = {
  "index.html": "*Home",
  "index-25.html": "*Sitemap",
  "index.html#2": "*SEARCH THE SITE",
  "index-1.html": "*Horse History",
  "index-2.html": "*Horseman Tips",
  "index-3.html": "*Horsemanship",
  "index-28.html": "*Amazing Horse Hoof",
  "index-5.html": "*Horse Anatomy Pictures",
  "index-4.html": "*Rope Halters",
  "Horse_thoughts.html": "My Random Horse Thoughts",
  "index-6.html": "*Trying A Horse",
  "index-7.html": "*Bosal/Hackamores",
  "index-8.html": "*Bad Horsemanship",
  "index-9.html": "*Misc Horse Info",
  "index-10.html": "*Trailer Loading",
  "index-11.html": "*Training Videos",
  "index-12.html": "*Hobbles",
  "index-13.html": "*Horse Articles",
  "index-14.html": "*Health and Medical Info",
  "horse_fear.html": "Horse & Rider Fear",
  "horse_opposition_reflex.html": "Opposition Reflex",
  "index-15.html": "*Answer to Questions",
  "index-16.html": "*Cowboy Wisdom",
  "index-17.html": "*Cookie Recipe for Horses",
  "index-18.html": "*Horse Jokes",
  "index-19.html": "*Cowboy Weather",
  "index-20.html": "*Sites and Links",
  "index-24.html": "*A Horse's Prayer*",
  "index-21.html": "*Photos Rick and Horses",
  "mailto:horsyguy@yahoo.com": "*Contact Rick",
}; // index-22 missing

const mainNav = document.querySelector("#mainNav");

Object.keys(navKeys).forEach((k) => {
  const title = navKeys[k];
  const liStr = `<li> <a class="section" href="${k}">${title}</a></li>`;
  const li = document.createRange().createContextualFragment(liStr);
  mainNav.append(li);
});
