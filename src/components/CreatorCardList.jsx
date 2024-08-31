import { supabase } from "../client";
import { useEffect, useState } from "react";
import CreatorCard from "./CreatorCard";
function CreatorCardList() {
  const [creators, setCreators] = useState([]);
  const fetchCreators = async () => {
    try {
      const { data, error } = await supabase.from("creators").select("*");

      if (error) throw error;

      setCreators(data || []);
    } catch (error) {
      console.error("error fetching creators", error.message);
    }
  };
  useEffect(() => {
    fetchCreators();
  }, []);
  useEffect(() => {
    console.log("creators", creators);
  }, [creators]);
  return (
    <div className="grid">
      {creators.map((creator) => (
        <div key={creator.id}>
          <CreatorCard creator={creator} onDelete={fetchCreators} />
        </div>
      ))}
    </div>
  );
}

export default CreatorCardList;
