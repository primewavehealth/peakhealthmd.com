export default async function sitemap() {
 const routes = [
  "",
  "/about-the-vegas-clinic",
  "/contact",
  "/carboxytherapy-las-vegas",
  "/chronic-fatigue-syndrome-las-vegas",
  "/cold-laser-therapy-las-vegas",
  "/detox-therapy-las-vegas",
  "/erectile-dysfunction-treatment-in-las-vegas",
  "/fibromyalgia-treatment-las-vegas",
  "/hormone-therapy-menopause-las-vegas",
  "/immigration-physical-las-vegas",
  "/led-light-therapy-las-vegas",
  "/long-haul-covid-19-treatment",
  "/low-testosterone-treatment-las-vegas",
  "/mesotherapy-las-vegas",
  "/pain-treatment-in-las-vegas",
  "/peptide-therapy-las-vegas",
  "/prp-facial-in-las-vegas",
  "/shockwave-therapy-in-las-vegas",
  "/sleep-therapy-las-vegas",
  "/stem-cell-therapy-las-vegas",
  "/weight-gain-las-vegas",
  "/weight-loss-las-vegas",
 ].map((route) => ({
  url: `https://vegasclinic.com${route}`,
  lastModified: new Date().toISOString().split("T")[0],
 }));

 return [...routes];
}
