import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSKUTeble1716369228761 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "sku",
            columns: [
                {
                    name: "id",
                    type: "varchar",
                    length: "255",
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
                    name: "short_description",
                    type: "json",
                    isNullable: true,
                    default: "'{}'::json"
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
                    name: "modified_by",
                    type: "varchar",
                    length: "128",
                    isNullable: false,
                    default: "'system'"
                },
                {
                    name: "modified_on",
                    type: "timestamp",
                    isNullable: false,
                    default: "now()"
                },
                {
                    name: "code",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "product_id",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "variants_data",
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
                    isNullable: true
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
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("sku");
    }
}
