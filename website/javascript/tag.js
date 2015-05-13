/**
 * This is the tag object
 *
 * @param tagName
 * @param tagColor
 * @constructor
 */
function Tag(tagName, tagColor) {
    this.tagName = tagName;
    this.tagColor = tagColor;

    /**
     * Returns whether or not a tag matches another
     *
     * @param tag can pass either a string or a tag
     * @returns {boolean}
     */
    this.match = function (tag) {
        if (typeof(tag) == "string") {
            var matches = this.tagName.match(tag);
            if (matches == tag) {
                return true;
            }
        }
        else {
            matches = this.tagName.match(tag.tagName);
            if (matches == tag.tagName) {
                return true;
            }
        }
        return false;
    }
}