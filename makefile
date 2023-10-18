sql_setting_file = ./sql/settings.sql
sql_clean_file = ./sql/remove.sql

all: ${sql_setting_file}
	mysql -u root -p < $<

clean: ${sql_clean_file}
	mysql -u root -p < $<
