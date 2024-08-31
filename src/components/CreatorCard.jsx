import { Link } from "react-router-dom";
import { supabase } from "../client";
import { FaInfoCircle, FaPen, FaTrashAlt, FaGlobe } from "react-icons/fa";

function CreatorCard({ creator, onDelete }) {
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
  return (
    <article>
      <header
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {creator.name}
        <div style={{ display: "flex", gap: 20 }}>
          <Link to={`/creators/${creator.id}`}>
            <FaInfoCircle />
          </Link>
          <Link to={`/creators/${creator.id}/edit`}>
            <FaPen />
          </Link>
        </div>
      </header>
      {creator.description}
      <footer
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <FaGlobe style={{ cursor: "pointer" }} onClick={handleNavigate} />
        <FaTrashAlt style={{ cursor: "pointer" }} onClick={handleDelete} />
      </footer>
    </article>
  );
}

export default CreatorCard;
