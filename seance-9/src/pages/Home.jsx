import Navbar from "../components/Navbar";
import MainArticle from "../components/MainArticle";
import Article from "../components/Article";
let author = {
  fullName: "Kais Said",
  img: "https://i0.wp.com/lapresse.tn/wp-content/uploads/2020/03/kais-saied-4.jpg?fit=960%2C647&ssl=1",
  job: "President",
};
export default function Home() {
  return (
    <div>
      <Navbar />
      <MainArticle
        category="Productivity"
        createAt="14 Feb, 2024"
        coverImage="https://media.istockphoto.com/id/1368965646/fr/photo/des-gars-et-des-filles-multiethniques-prenant-des-selfies-%C3%A0-lext%C3%A9rieur-avec-r%C3%A9tro-%C3%A9clairage.jpg?s=612x612&w=0&k=20&c=l25CMmBz_0ZjdrwvqcOVrVva0FAlFBZRszxvDEaqJEE="
        title="What is Remote Work Like and Is It the Right Move For You?"
        description="What is remote work really like?
        Despite all the reasons remote work is trending, many people still can’t get over the popular myths about virtual work so they haven’t experienced it firsthand for themselves.
        And that may be a tremendous mistake."
        author={author}
      />
      <div>
        <Article></Article>
        <Article></Article>
      </div>
    </div>
  );
}
