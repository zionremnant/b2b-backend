const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tags = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const id = req.params.id;
    const searchedTag = await Tag.findByPk(id, {
      include: [{ model: Product }],
    });
    if (!searchedTag) {
      res.status(404).json({ message: "Tag not found" });
    }
    res.status(200).json(searchedTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create({ tag_name: req.body.tag_name });
    res.status(200).json({ message: "Tag created" });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updatedTag = await Tag.update(
      { tag_name: req.body.tag_name },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ message: "Tag updated" });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deleteTag = await Tag.destroy({ where: { id: req.params.id } });
    if (!deleteTag) {
      res.status(404).json({ message: "Tag not found" });
    }
    res.status(200).json({ message: "Tag deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
