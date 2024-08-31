import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../client";

function EditAddCreatorPage() {
  const { id } = useParams();
  const isEditMode = Boolean(id);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    if (isEditMode) {
      const fetchCreator = async () => {
        setLoading(true);
        try {
          const { data, error } = await supabase
            .from("creators")
            .select("*")
            .eq("id", id)
            .single();
          if (error) throw error;
          setName(data.name);
          setDescription(data.description);
          setUrl(data.url);
          setImageURL(data.imageURL);
        } catch (error) {
          console.error("Error fetching creator:", error.message);
        } finally {
          setLoading(false);
        }
      };
      fetchCreator();
    }
  }, [id, isEditMode]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      if (isEditMode) {
        const { error } = await supabase
          .from("creators")
          .update({ name, description, url, imageURL })
          .eq("id", id);
        if (error) throw error;
        console.log("Creator updated successfully");
      } else {
        const { error } = await supabase
          .from("creators")
          .insert([{ name, description, url, imageURL }]);
        if (error) throw error;
        console.log("Creator added successfully");
      }
      navigate("/");
    } catch (error) {
      console.error("Error saving creator:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2 style={{ paddingTop: 10 }}>
        {isEditMode ? "Edit Creator" : "Add New Creator"}
      </h2>
      <form onSubmit={handleFormSubmit}>
        <fieldset>
          <label>
            Name
            <input
              value={name}
              placeholder="First name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Description
            <input
              value={description}
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </label>
          <label>
            Url
            <input
              value={url}
              placeholder="Url"
              onChange={(e) => setUrl(e.target.value)}
              required
            />
          </label>
          <label>
            imageURL
            <input
              value={imageURL}
              placeholder="Image url"
              onChange={(e) => setImageURL(e.target.value)}
              required
            />
          </label>
        </fieldset>
        <input
          disabled={loading}
          type="submit"
          value={isEditMode ? "Save Changes" : "Add Creator"}
        />
      </form>
    </div>
  );
}

export default EditAddCreatorPage;
