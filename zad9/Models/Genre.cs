using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace zad9.Models
{
    public class Genre
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = "Name is required!")]
        [StringLength(50, ErrorMessage = "Maximal length of the name of a genre is 50 characters!")]
        public string Name { get; set; }
        public virtual ICollection<Song> Songs { get; set; }
    }
}