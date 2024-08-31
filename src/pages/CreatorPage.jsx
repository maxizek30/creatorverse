import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../client";
import { FaGlobe, FaTrashAlt, FaPen } from "react-icons/fa";

function CreatorPage() {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCreator = async () => {
      try {
        const { data, error } = await supabase
          .from("creators")
          .select("*")
          .eq("id", id)
          .single();

        if (error) throw error;
        setCreator(data);
      } catch (error) {
        console.error("Error fetching creator:", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCreator();
  }, [id]);
  const handleNavigate = () => {
    window.location.href = creator.url;
  };
  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${creator.name}?`
    );
    if (confirmDelete) {
      try {
        const { error } = await supabase
          .from("creators")
          .delete()
          .eq("id", creator.id);
        if (error) throw error;

        if (onDelete) onDelete();
      } catch (error) {
        console.error("Error deleting creator:", error.message);
      }
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "80%",
        }}
      >
        <h1 style={{ paddingTop: 10 }}>{creator.name}</h1>
        <FaGlobe
          style={{ cursor: "pointer" }}
          size={40}
          onClick={handleNavigate}
        />
      </div>

      <img
        src={creator.imageURL}
        style={{
          width: "50%",
          borderWidth: 1,
          borderColor: "black",
          borderStyle: "solid",
        }}
      />
      <h2>Who is {creator.name}?</h2>
      <p>{creator.description}</p>
      <div style={{ display: "flex", gap: 20 }}>
        <FaTrashAlt
          style={{ cursor: "pointer" }}
          size={40}
          onClick={handleDelete}
        />
        <Link to={`/creators/${creator.id}/edit`}>
          <FaPen size={40} />
        </Link>
      </div>
    </div>
  );
}

export default CreatorPage;
