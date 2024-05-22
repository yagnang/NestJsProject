import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateVariantDATA1716372006816 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "variant_data",
            columns: [
                {
                    name: "id",
                    type: "varchar",
                    isPrimary: true,
                    isNullable: false,
                    default: "uuid_generate_v4()"
                },
                {
                    name: "name_lang",
                    type: "json",
                    isNullable: false,
                    default: "'{}'::json"
                },
                {
                    name: "data_area",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "short_description",
                    type: "json",
                    isNullable: false,
                    default: "'{}'::json"
                },
                {
                    name: "type",
                    type: "bit",
                    length: "1",
                    isNullable: true
                },
                {
                    name: "active",
                    type: "boolean",
                    isNullable: true
                },
                {
                    name: "created_by",
                    type: "varchar",
                    length: "128",
                    isNullable: false,
                    default: "'system'"
                },
                {
                    name: "created_on",
                    type: "timestamp",
                    isNullable: false,
                    default: "now()"
                },
                {
                    name: "updated_by",
                    type: "varchar",
                    length: "128",
                    isNullable: false,
                    default: "'system'"
                },
                {
                    name: "updated_on",
                    type: "timestamp",
                    isNullable: false,
                    default: "now()"
                },
                {
                    name: "code",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "hex",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "variant_id",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "parent_variant_id",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "long_description",
                    type: "json",
                    isNullable: false,
                    default: "'{}'::json"
                },
                {
                    name: "approved_by",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "web_image",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "mobile_image",
                    type: "varchar",
                    isNullable: true
                }
            ]
        }));

        await queryRunner.createForeignKey("variant_data", new TableForeignKey({
            columnNames: ["variant_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "variant",
            onDelete: "RESTRICT"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("variant_data");
        await queryRunner.dropForeignKey("variant_data", "variant_id");


    }

}
