DROP TABLE IF EXISTS ser_report;

CREATE TABLE IF NOT EXISTS ser_report (
  id INT NOT NULL AUTO_INCREMENT,
  nom VARCHAR(50),
  types VARCHAR(50),
  descriptions VARCHAR(50),
  process VARCHAR(50),
  PRIMARY KEY (id)
);

-- INSERT INTO ser_report
-- 	(nom, types, descriptions,process)
-- VALUES 
-- ("1","Clothes"," 5 Jackets Size Toddler, 3 Pants Size Toddler"," * 2 Jackets and 2 Pants x family  * 3Jackets and 1 pants RSE(ngo) ")