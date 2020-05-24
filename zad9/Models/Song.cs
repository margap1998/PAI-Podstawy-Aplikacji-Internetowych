using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Reflection.Emit;
using System.Web;

namespace zad9.Models
{
    public class Song
    {
        [Key]
        public int Id { get; set; }
        public Song() { }
        public Song(string N,string A, int G, int i)
        {
            Name = N;
            Artist = A;
            GenreId = G;
            Id = i;
        }
        [Required(ErrorMessage = "Name is required!")]
        [StringLength(100, ErrorMessage = "Maximal length of thename of a song is 100 characters!")]
        public string Name { get; set; }
        [Required(ErrorMessage = "Artist is required!")]
        [StringLength(100, ErrorMessage = "Maximal length of the artist's name is 100 characters!")]
        public string Artist { get; set; }
        [Display(Name="Genre")]
        public int GenreId { get; set; }
        public virtual Genre Genre { get; set; }
    }
}