import { useEffect, useState } from "react";
import CreatorCard from "../components/CreatorCard";
import { supabase } from "../client";
import CreatorCardList from "../components/CreatorCardList";

function HomePage() {
  const [creators, setCreators] = useState([]);
  useEffect(() => {
    const fetchCreators = async () => {
      try {
        const { data, error } = await supabase.from("creators").select("*");

        if (error) throw error;

        setCreators(data || []);
      } catch (error) {
        console.error("error fetching creators", error.message);
      }
    };
    fetchCreators();
  }, []);
  return (
    <>
      <main className="container-fluid">
        <h1 style={{ paddingTop: 10 }}>Meet the Creators!</h1>
        <CreatorCardList />
      </main>
    </>
  );
}

export default HomePage;
